// Adjust right column margin based on left panel width
function adjustRightMargin() {
    const leftWidth = document.getElementById('leftPanel').offsetWidth;
    document.getElementById('rightContent').style.marginLeft = leftWidth + 'px';
}

// Adjust on load and when window resizes
window.addEventListener('load', adjustRightMargin);
window.addEventListener('resize', adjustRightMargin);

fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('leftPanel').innerHTML = data;
    });