import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

// state は　reduxで管理している全てのstateを持っている
// ownPropsはconnectしたcomponent本来のpropsを取得する
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

// 第一引数はcomponentに渡すpropsを制御する
// 第二引数はreducerを呼び出して、reduxで管理しているstateを更新する
// ()内は取得したデータをpropsとして扱いたいcomponentを指定する
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);
