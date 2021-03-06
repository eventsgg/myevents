import React from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import { IPageLoadingStore } from '../../Typings';

const styles = {
    root: {
        position: 'fixed' as 'fixed',
        width: '100%',
        zIndex: 9999,
    }
}

interface IPageProgressPresenter {
    classes: {
        root: string;
    };
    pageLoadingStore?: IPageLoadingStore;
}

@inject('pageLoadingStore')
@observer class PageProgressPresenter extends React.Component<IPageProgressPresenter> {
    render() {
        const { classes, pageLoadingStore } = this.props;

        return (
            <div 
                className={classes.root} 
                style={{visibility: pageLoadingStore!.loading ? 'visible' : 'hidden'}}
            >
                <LinearProgress color="secondary" />
            </div>
        );
    }
}

export const PageProgress = withStyles(styles)(PageProgressPresenter);