// import { util } from 'protobufjs/minimal'
// import {SignedMessage, HistorianDataPoint} from './oipProto'

let pbjs = require('protobufjs/minimal')
let util = pbjs.util
let oipProto = require('./lib/oipProto')
let SignedMessage = oipProto.SignedMessage
let HistorianDataPoint = oipProto.HistorianDataPoint

txcomment = 'p64:CmUIARIiRlRmcjNWVjFhZEdIQ2lwaEtqZXZhbWd1U2JqckdOZnRDZhkMkJFxi2LxPiEbE/0jV+fWPikAAAAg9ckAQjH1eafbe4VJQjkrL1zKt0bdPkG4E1db0s2nP0mtad5xiipVQBACGAEiIkZUZnIzVlYxYWRHSENpcGhLamV2YW1ndVNianJHTmZ0Q2YqQSAo8NmqzrpzemHpyfgrDsBge2UsI/r3aMG30GzUsTnFmAyqeEewY43ZxD5ljQWVOGmnZz6aNfuDFR27bnBBk1Sq'

if (txcomment && txcomment.startsWith('p64:')) {
  let msg = txcomment.substring(4)
  dec = decodeProtoMessage(msg)

  let prettySignedMessage = JSON.stringify(dec.signedMessageJson, null, ' ')
  let prettyHistorianMessage = JSON.stringify(dec.historianMessageJson, null, ' ')

  console.log(prettySignedMessage)
  console.log(prettyHistorianMessage)
}

function decodeHistorianMessage (signedMessage) {
  let msg = signedMessage.SerializedMessage
  return HistorianDataPoint.decode(msg)
}

function decodeProtoMessage (msg) {
  let dec = {}
  let buf = util.newBuffer(util.base64.length(msg))
  util.base64.decode(msg, buf, 0)
  let sm = SignedMessage.decode(buf)
  dec.signedMessage = sm
  dec.signedMessageJson = sm.toJSON()
  dec.signedMessageJson.PubKey = dec.signedMessage.PubKey.toString()

  switch (sm.MessageType) {
    case  oipProto.MessageTypes.Historian:
      let hm = decodeHistorianMessage(sm)
      dec.historianMessage = hm
      dec.historianMessageJson = hm.toJSON()
      dec.historianMessageJson.PubKey = dec.historianMessageJson.PubKey.toString()
      break
    case oipProto.MessageTypes.OIP05:
      // placeholder
      break
  }
  return dec
}