'use strict';
import $ from 'jquery';
const block = $('#block');
const scalingButton = $('#scaling-button');

scalingButton.click(() => {
  block.animate({ width: '200pt', height: '200pt' }, 2000);
  block.animate({ width: '100pt', height: '100pt' }, 2000);
});

const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft': '500px' }, 500);
  block.animate({ 'marginLeft': '20px' }, 1000);
});

const loadavg = $('#loadavg');

setInterval(() => {
  // 今回学ぶ AJAX の部分
  // /server-status にゲットリクエストを投げる。結果が data に JSON で入ってくる。
  $.get('/server-status', {}, (data) => {
    loadavg.text(data.loadavg.toString());
  });
}, 1000);
