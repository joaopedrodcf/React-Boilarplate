import React from 'react';
import Article from './Article.jsx';

export default class Section extends React.Component {
    render() {
        return (
            <section>
                <p>Section with articles</p>
                <Article/>
            </section>
        );
    }
}
