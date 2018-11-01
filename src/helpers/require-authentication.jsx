import React from 'react';
import { connect} from 'react-redux';

/**
 *
 * @param ChildComponent
 * @returns {{new(): RequireAuthentication, prototype: RequireAuthentication}}
 */
export default function(ChildComponent) {
  /**
   *
   */
  class RequireAuthentication extends React.Component {
    /**
     *
     */
    constructor(props) {
      super(props);
      const { history, isLoggedIn} = props;

      if (!isLoggedIn) history.push('/');
    }

    /**
     *
     * @param nextProps
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
      const { history, isLoggedIn } = prevProps;

      if (!isLoggedIn) history.push('/');
      return null;
    }

    componentDidUpdate() {}

    /**
     *
     * @return {React.Component}
     */
    render() {
      return <ChildComponent />;
    }
  }

  const mapStateToProps = (state) => ({
    isLoggedIn: state.authentication.isLoggedIn
  });

  return connect(mapStateToProps)(RequireAuthentication);
}
