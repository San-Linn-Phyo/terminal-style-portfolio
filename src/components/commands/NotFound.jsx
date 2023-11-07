import PropTypes from "prop-types";

export default function NotFound({ command }) {
  return (
    <h1>
      <code>{command}</code> is not found
    </h1>
  );
}

NotFound.propTypes = {
  command: PropTypes.string.isRequired,
};
