import PropTypes from 'prop-types';
import './section.css';

const Section = ({ title, children }) => (
  <section>
    <h1 className="sectionTitle">{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
