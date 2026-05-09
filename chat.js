const messageDisplay = document.getElementById('message-display');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// 模擬 6 位成員的電影活動討論
const initialMessages = [
  { name: "小華", text: "大家 6/20 會去參加圖書館的電影活動嗎？要播《啟動原始碼》耶！", isSelf: false },
  { name: "大強", text: "會喔！我超喜歡這部片的，聽說活動是從下午一點開始到五點？", isSelf: false },
  { name: "小美", text: "對啊，時間挺長的，不知道是在圖書館的哪一層樓放映？", isSelf: false },
  { name: "阿明", text: "應該是在 5 樓的多媒體放映室吧，那邊位置很大，設備也比較好。", isSelf: false },
  { name: "雅欣", text: "我也想去！需要準備學生證刷卡進館嗎？還是直接進去就好？", isSelf: false },
  { name: "志豪", text: "直接進去應該就可以了吧，我打算當天一點準時到，希望能坐到中間的位置！", isSelf: false }
];

function appendMessage(sender, text, isSelf) {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.alignItems = isSelf ? 'flex-end' : 'flex-start';

  if (!isSelf) {
    const nameDiv = document.createElement('div');
    nameDiv.className = 'sender-name';
    nameDiv.textContent = sender;
    wrapper.appendChild(nameDiv);
  }

  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${isSelf ? 'self' : 'other'}`;
  msgDiv.textContent = text;
  
  wrapper.appendChild(msgDiv);
  messageDisplay.appendChild(wrapper);
  messageDisplay.scrollTop = messageDisplay.scrollHeight;
}

function sendMessage() {
  const text = messageInput.value.trim();
  if (text) {
    appendMessage('您', text, true);
    messageInput.value = '';
  }
}

// 初始化對話內容
initialMessages.forEach(msg => appendMessage(msg.name, msg.text, msg.isSelf));

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});