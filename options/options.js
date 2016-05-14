// Saves options to chrome.storage.sync.
function save_options() {
  var topic = document.getElementById('topic').value;
  chrome.storage.sync.set({
    adTopic: topic
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


// document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);