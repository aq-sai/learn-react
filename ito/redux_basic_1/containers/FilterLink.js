import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({    //reduxのストアを第一引数に取る関数で、componentにpropとして渡すものフィルタリングしたい時に使う
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({    //reduxのディスパッチを第一引数に取る関数で、変更を伝えるアクションを作成するときに使う
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)