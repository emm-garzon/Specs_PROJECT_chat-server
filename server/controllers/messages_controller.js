let messages = [];
let id = 0;

module.exports = {
  msgCreate: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },

  msgRead: (req, res) => {
    res.status(200).send(messages);
  },

  msgUpdate: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(messages);
  },

  msgDelete: (req, res) => {
    const deleteID = req.params.id;
    const messageIndex = messages.findIndex(message.id === deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  },
};
