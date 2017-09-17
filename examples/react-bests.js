/* tslint:disable */

/* 1.
 * DON'T BIND VALUES IN FUNCTIONS IN RENDER:
 * Every time the parent’s render method is called, a new function (with a new reference) is created to be passed to likeComment.
 * */
<CommentItem likeComment={() => { return; }} />
<CommentItem likeComment={this.likeComment} />
class CommentItem extends PureComponent {
    handleLike() {
        this.props.likeComment();
    }
}

/* 2.1
 * DON'T DERIVE DATA IN THE RENDER METHOD:
 * 'topTen' will have a brand new REFERENCE each time the component re-renders, 
 * even if posts hasn’t changed and the derived data is the same. 
 * This will then re-render the list needlessly.
 * */
class CacheComponent extends React.Component {
    render() {
        const {cities} = this.props;
        const topCities = cities.map(_ => _);   // CREATES A NEW ARRAY EACH TIME!

        return (
            <ChildComponent cities={topCities} />
        );
    }
}
/* 2.2
 * You can solve this by caching your derived data. 
 * For example, Set the derived data in the component’s state and update only when the posts have updated.
 * */
class CacheComponent extends React.Component {
    componentWillMount() {
        this.setTopCities(this.props.cities);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.cities !== nextProps.cities) {
            this.setToptopCities(nextProps);
        }
    }
    setTopTenPosts(cities) {
        this.setState({
            topCities: cities.map(_ => _)
        });
    }
    render() {
        return (
            <ChildComponent cities={this.state.topCities} />
        );
    }
}
