import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({options, onLeaveFeedback})  {
    return (
      <>
        {options.map(key =>
        (<button
          className={s.button}
          key={key}
          type="button"
          onClick={onLeaveFeedback}>
          {key}
        </button>))}
      </>
    );
  };


    FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };