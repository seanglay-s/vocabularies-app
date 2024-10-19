function fetchData() {
  return {
    items: [],
    isLoading: true,
    hasError: false,
    init() {
      fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1MBaIRfFRoKtw1ZybvzfCdwd3eQBPKIoRGZW_sf-Cgtk/values/Sheet1!A:C?key=AIzaSyADiTjpgjKjvrkXSyjTKHwS-KkBKf-DUuw"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.items = data.values;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.hasError = true;
        });
    },
  };
}