class ModuleLoader {
  constructor(containerId) {
    this.container = $('#' + containerId);
  }

  loadModule(modulePath) {
    $.ajax({
      url: modulePath,
      dataType: 'html',
      success: (data) => {
        this.container.html(data);
      },
      error: (xhr, status, error) => {
        console.error(`Error loading module: ${modulePath}. Status: ${status}. Error: ${error}`);
      }
    });
  }
}