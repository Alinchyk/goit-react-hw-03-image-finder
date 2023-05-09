import PropTypes from 'prop-types';

export default function StatusError({ message }) {
  return (
    <div role="alert">
      <p>No response from server {message}</p>
    </div>
  );
}

StatusError.propTypes = {
  message: PropTypes.string.isRequired,
};