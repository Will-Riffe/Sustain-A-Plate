const { format } = require('date-fns');

// Function to format a date in a specific format with date-fns
function formatDate(timestamp, formatString) {
  return format(new Date(timestamp), formatString);
}

module.exports = formatDate;
