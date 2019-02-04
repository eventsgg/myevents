import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

interface IEventCardProps {
    classes: {
        media: string;
        actions: string;
    };
    image: {
      src: string;
      title: string;
    };
    title: string;
    style?: object;
    shareModalStore?: any
}

@inject('shareModalStore')
@observer class PureEventCard extends Component<IEventCardProps> {
  showShareModal() {
    this.props.shareModalStore.open = true;
  }

  render() {
    const { classes, image, title } = this.props;

    return (
      <Card style={this.props.style}>

        <CardMedia className={ classes.media } image={ image.src } title={ image.title }/>

        <CardContent>
          <Typography variant={'title'}>{ title }</Typography>
        </CardContent>

        <CardActions className={classes.actions} disableActionSpacing>

          <IconButton aria-label="Добавить в избранное">
            <FavoriteIcon />
          </IconButton>

          <IconButton onClick={this.showShareModal.bind(this)} aria-label="Поделиться">
            <ShareIcon />
          </IconButton>

        </CardActions>
      </Card>
    );
  }
}

const EventCard = withStyles(({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }
}))(PureEventCard);

export { EventCard };