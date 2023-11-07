import PropTypes from "prop-types";

export default function Echo({ command }) {
  const result = command
    .split(" ")
    .slice(1)
    .join(" ")
    .replace(/^['"]|['"]$|;$/g, "");

  return <h1>{result}</h1>;
}

Echo.propTypes = {
  command: PropTypes.string.isRequired,
};
