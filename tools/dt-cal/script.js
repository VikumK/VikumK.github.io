$(document).ready(function () {
  // Real-time validation
  $("#fileSize, #downloadSpeed").on("input", function () {
    validateInput($(this));
  });
  // Calculate button click event
  $("#calculateButton").click(function () {
    calculateDownloadTime();
  });

  // Reset button click event
  $("#resetButton").click(function () {
    resetForm();
  });

  // Function to validate input fields
  function validateInput(input) {
    const value = input.val();
    if (isNaN(value) || value < 0) {
      input.addClass("is-invalid");
      input.parent().next(".error-message").removeClass("d-none");
    } else {
      input.removeClass("is-invalid");
      input.parent().next(".error-message").addClass("d-none");
    }
  }

  // Function to calculate download time
  function calculateDownloadTime() {
    const fileSize = parseFloat($("#fileSize").val());
    const downloadSpeed = parseFloat($("#downloadSpeed").val());
    const fileSizeUnit = $("#size-unit").val();
    const speedUnit = $("#speed-unit").val();

    if (
      isNaN(fileSize) ||
      isNaN(downloadSpeed) ||
      fileSize <= 0 ||
      downloadSpeed <= 0
    ) {
      alert("Please enter valid file size and download speed.");
      return;
    }

    let fileSizeInBytes = convertToBytes(fileSize, fileSizeUnit);
    let downloadSpeedInBitsPerSecond = convertToBitsPerSecond(
      downloadSpeed,
      speedUnit
    );

    let downloadTimeInSeconds =
      (fileSizeInBytes * 8) / downloadSpeedInBitsPerSecond;

    // Display result
    $("#result").html(
      `<p>Estimated download time: ${formatTime(downloadTimeInSeconds)}</p>`
    );
  }

  // Function to reset the form
  function resetForm() {
    $("#fileSize").val("");
    $("#downloadSpeed").val("");
    $("#size-unit").val("Byte");
    $("#speed-unit").val("bps");
    $(".error-message").addClass("d-none");
    $(".form-control").removeClass("is-invalid");
    $("#result").html("");
  }

  // Function to convert file size to bytes
  function convertToBytes(size, unit) {
    switch (unit) {
      case "Kilobyte":
        return size * 1024;
      case "Megabyte":
        return size * 1024 * 1024;
      case "Gigabyte":
        return size * 1024 * 1024 * 1024;
      case "Terabyte":
        return size * 1024 * 1024 * 1024 * 1024;
      case "Bit":
        return size / 8;
      case "Kilobit":
        return (size * 1024) / 8;
      case "Megabit":
        return (size * 1024 * 1024) / 8;
      case "Gigabit":
        return (size * 1024 * 1024 * 1024) / 8;
      case "Terabit":
        return (size * 1024 * 1024 * 1024 * 1024) / 8;
      default:
        return size;
    }
  }

  // Function to convert download speed to bits per second
  function convertToBitsPerSecond(speed, unit) {
    switch (unit) {
      case "Kbps":
        return speed * 1024;
      case "Mbps":
        return speed * 1024 * 1024;
      case "Gbps":
        return speed * 1024 * 1024 * 1024;
      case "Tbps":
        return speed * 1024 * 1024 * 1024 * 1024;
      case "KBps":
        return speed * 8 * 1024;
      case "MBps":
        return speed * 8 * 1024 * 1024;
      case "GBps":
        return speed * 8 * 1024 * 1024 * 1024;
      case "TBps":
        return speed * 8 * 1024 * 1024 * 1024 * 1024;
      default:
        return speed;
    }
  }

  // Function to format time in HH:MM:SS
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  }
});
