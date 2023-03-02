export function confirm(text) {
  const confirmDialog = document.getElementById("confirmDialog");
  const confirmMsg = document.getElementById("confirmMsg");
  const confirmOutput = document.getElementById("confirmOutput");
  const cancel = document.getElementById("cancel")
  const ok = document.getElementById("ok");

  // clears confirm output
  confirmOutput.innerHTML = "";
  confirmMsg.innerHTML = text;
  confirmDialog.showModal();

  ok.addEventListener('click', () => {
    confirmOutput.innerHTML = `Confirm result: ${true}`
    // clears text response
    promptOutput.innerHTML = ""
  });

  cancel.addEventListener('click', () => {
    confirmOutput.innerHTML = `Confirm result: ${false}`
    // clears text response
    promptOutput.innerHTML = ""
  });
}

export function prompt(text) {
  const promptDialog = document.getElementById("promptDialog");
  const promptMsg = document.getElementById("promptMsg");
  const promptOutput = document.getElementById("promptOutput");
  const cancelPrompt = document.getElementById("cancelPrompt");
  const okPrompt = document.getElementById("okPrompt");
  const textResponse = document.getElementById("textResponse");

  // clears text response
  textResponse.value = "";

  promptMsg.innerHTML = text;
  promptDialog.showModal();
  
  okPrompt.addEventListener('click', () => {
    let clean = DOMPurify.sanitize(textResponse.value)
    promptOutput.innerHTML = `You entered: ${clean}`
    if (!clean) {
      promptOutput.innerHTML = `User didn't enter anything`
    }
    // clears confirm output
    confirmOutput.innerHTML = ""
  });

  cancelPrompt.addEventListener('click', () => {
    promptOutput.innerHTML = `User didn't enter anything`
    // clears confirm output
    confirmOutput.innerHTML = ""
  });
}