async function getUser() {
  const response = await fetch('https://api.github.com/users/bbmorten');
  const data = await response.json();
  return data;
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = { getUser, capitalizeWords };
