(function() {
  'use strict';

  // ボタン系
  var btnConnect = document.querySelector('.btn-connect');
  var btnDisconnect = document.querySelector('.btn-disconnect');
  var btnPublish = document.querySelector('.btn-publish');
  var btnSubscribe = document.querySelector('.btn-subscribe');
  var btnUnsubscribe = document.querySelector('.btn-unsubscribe');
  var btnClear = document.querySelector('.btn-clear');

  // 入力系
  var inputTopicPub = document.querySelector('.input-topic-pub');
  var inputMessage = document.querySelector('.input-message');
  var inputTopicSub = document.querySelector('.input-topic-sub');
  var inputBrokerWs = document.querySelector('.input-broker-ws');

  var messages = document.querySelector('.messages');

  var client, appendMessage, clearMessages;
  
  btnConnect.addEventListener('click', function(e) {
    e.preventDefault();
    client = mows.createClient(inputBrokerWs.value);
    appendMessage('connection open :)');
    client.on('message', function (topic, message) {
      console.log(message);
      appendMessage(message);
    });
  });

  btnDisconnect.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.end();
    appendMessage('connection closed');
  });

  btnPublish.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.publish(inputTopicPub.value, inputMessage.value);
  });

  btnSubscribe.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.subscribe(inputTopicSub.value);
    appendMessage('subscribe -> ' + inputTopicSub.value);
  });

  btnUnsubscribe.addEventListener('click', function(e) {
    e.preventDefault();
    client && client.unsubscribe(inputTopicSub.value);
    appendMessage('unsubscribe -> ' + inputTopicSub.value);
  });

  btnClear.addEventListener('click', function(e) {
    e.preventDefault();
    clearMessages();
  });

  appendMessage = function(message) {
    var element = document.createElement('p');
    var string = document.createTextNode(message);
    element.appendChild(string);
    messages.appendChild(element);
  }

  clearMessages = function() {
    var count = messages.childNodes.length;
    for(var i=0; i<count; i++) {
      messages.removeChild(messages.firstChild);
    }
  }

})();