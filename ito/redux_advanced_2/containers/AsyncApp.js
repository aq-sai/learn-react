import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefleshClick = this.handleRefleshClick.bind(this)
    }

    componentDidMount() { //DOMに関する初期化処理。server-side renderingの時には呼ばれない。
        const { dispatch, selectSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectSubreddit))
    }

    componentDidUpdate(prevProps) {  //componentが更新された後に呼ばれる(初回時には呼ばれない)。
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefleshClick(e) {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpsate } = this.props
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'fronted']}
                />
                <p>
                    {lastUpdate &&
                        <span>
                            Last Update at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                        </span>}
                    {!isFetching &&
                        <button onClick={this.handleRefleshClick}>
                            Reflesh
                        </button>}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>}
            </div>
        )
    }
}

AsyncApp.PropTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdate: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {　　//reduxのストアを第一引数に取る関数で、componentにpropとして渡すものフィルタリングしたい時に使う
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdate,
        item: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdate
    }
}

export default connect(mapStateToProps)(AsyncApp)