function toggleSidebar (event) {
    if (event) event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'flex' ? 'none' : 'flex'
}