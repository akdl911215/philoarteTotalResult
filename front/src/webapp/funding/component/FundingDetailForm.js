import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FolderOutlined from '@material-ui/icons/FolderOutlined';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ShareIcon from '@material-ui/icons/Share';
import LaunchIcon from '@material-ui/icons/Launch';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(90deg, #D9DAEB, #EBE5E3)',
        flexGrow: 1,
        padding: 14,
    },
    productgrid: {
        maxWidth: 1200,
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        backgroundColor: '#EBE5E3',
    },
    card: {
        borderWidth: 2,
        width: 300,
    },
    w314: {
        width: 300,
    },
    content: {
        height: 20,
        padding: `-20 0 0 0`,
        margin: `-20 0 0 0`,
        lineHeight: 1,
    },
    largeCover: {
        display: 'flex',
        minWidth: 360,
        flexDirection: 'row',
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        margin: 0,
    },
    content: {
        height: 30,
        padding: `0 0 0 0`,
        margin: `0 0 0 0`,
    },
    button: {
        containedPrimary: {
            border: 2,
        },
    },

    h1: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 72,
        fontWeight: 600,
        lineHeight: 1.2,
        color: 'rgba(80,80,80,1)',
    },
    h2: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 60,
        fontWeight: 300,
        lineHeight: 1.2,
        color: 'rgba(80,80,80,1)',
    },
    h3: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 48,
        fontWeight: 600,
        lineHeight: 1.2,
        color: 'rgba(80,80,80,1)',
    },
    h4: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 30,
        fontWeight: 600,
        lineHeight: 1.2,
        color: 'rgba(80,80,80,1)',
    },
    h5: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 1.2,
        color: 'rgba(80,80,80,1)',
    },
    h6: {
        fontFamily: '"Sofia-Pro", sans-serif',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
        color: 'rgba(80,80,80,1)',
    },
    subtitle1: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: 14,
        letterSpacing: '0.1em',
        fontStyle: 'normal',
        fontWeight: 400,
        color: 'rgba(80,80,80,1)',
    },
    subtitle2: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: 12,
        letterSpacing: '0.1em',
        fontWeight: 300,
        color: 'rgba(80,80,80,1)',
    },
    body1: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: 18,
        lineHeight: 1.5,
        color: 'rgba(80,80,80,1)',
    },
    body2: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 300,
        color: 'rgba(80,80,80,1)',
    },
    caption1: {
        fontFamily: '"Rubik", sans-serif',
        fontSize: 12,
        lineHeight: 1.4,
        color: 'rgba(80,80,80,1)',
    },

    spacer: {
        display: 'block',
        height: 10,
    },

    typography: {
        font: 'system-ui',
    },

    icons: {
        fontSize: 30,
    },

    buttonone: {
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#3D77F9',
        letterSpacing: '1px',
        fontWeight: 300,
        height: 42,
    },
    buttontwo: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#6633ff',
        borderRadius: '8px',
        color: '#3D77F9',
        letterSpacing: '1px',
        fontWeight: 400,
        backgroundColor: 'rgba(61,119,249, .15)',
        height: 42,
    },
    buttoncircle: {
        borderRadius: '21px',
        borderColor: 'rgba(61,119,249, .15)',
        borderWidth: 1,
        color: '#3D77F9',
        letterSpacing: '1px',
        fontWeight: 400,
        height: 36,
        backgroundColor: 'rgba(61,119,249, .15)',
    },
    label: {
        color: 'red',
        letterSpacing: '1px',
        fontWeight: 400,
        fontsize: 6,
    },
    dividerFullWidth: {
        margin: `${theme.spacing(3)}px 0 ${theme.spacing(0)}px 0`,
    },
    nested: {
        margin: `0 0 0 0`,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    list: {
        padding: `0 0 0 0`,
        margin: `0 0 0 0`,
    },
    quote: {
        fontStyle: 'italic',
    },
    source: {
        textAlign: 'right',
        paddingBottom: `${theme.spacing(3)}px 0 ${theme.spacing(30)}px 0`,
        display: 'block',
    },
    media: {
        width: 300,
        height: 412,
        backgroundSize: 'contain',
        backgroundPosition: 'top',
    },
    grey: {
        backgroundColor: '#df6789',
    },
}));

const FundingDetailForm = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={4} className={classes.productgrid}>
                <Grid item s={12} sm={8} className={classes.largeCover}>
                    <Box className={classes.box}>
                        <Typography gutterBottom variant="h3" component="h3" className={classes.h3}>
                            The West Point History of Warfare, Part I
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                            UNIVERSITY
                        </Typography>
                        <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                            United States Military Academy
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                            COURSE
                        </Typography>
                        <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                            HI 302
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                            EDITORS
                        </Typography>
                        <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                            Clifford Rogers and Ty Seidule
                        </Typography>
                        <div className={classes.spacer} />
                        <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p">
                            AUTHORS
                        </Typography>
                        <Typography className={classes.body1} variant="body1" color="textSecondary" component="p">
                            Samuel J. Watson, Edward G. Lengel, and Stephen Conway
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <CardMedia Shadow={3} className={classes.media} image="https://shop.westpointhistoryofwarfare.com/spree/products/94/product/cover_USMA-HI301.jpg?1504823724" title="The West Point History of Warfare, Part I" />
                        <CardContent className={classes.content}>
                            <Typography className={classes.subtitle1} variant="subtitle1" color="textSecondary" component="p" align="center" style={{ marginTop: '-20px' }}>
                                <span class="mdi mdi-gesture-double-tap" style={{ fontSize: '28px' }}>
                                    &nbsp;
                                </span>
                                INTERACTIVE BOOK
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography gutterBottom variant="h5" component="h5" className={classes.h5}>
                        Interactive Book Features
                    </Typography>

                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image="src/images/icon_analtyic@2x.png" title="Contemplative Reptile" />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />
                    <div className={classes.spacer} />

                    <Divider className={classes.dividerFullWidth} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={3} className={classes.w314}>
                        <Grid item xs={12} sm={12}>
                            <Button variant="contained" color="primary" size="large" className={classes.w314}>
                                Add to Cart
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button variant="outlined" border={1} size="large" color="primary" className={classes.w314}>
                                Rent $39.99
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button size="large" color="primary">
                                <ShareIcon className={classes.shareIcon} />
                                &nbsp;&nbsp;share
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Button align="right" size="large" color="primary">
                                <LaunchIcon className={classes.shareIcon} />
                                &nbsp;&nbsp;preview
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Box className={classes.box}>
                        <Typography gutterBottom variant="h5" component="h5" className={classes.h5}>
                            Description
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            <p>The West Point History of the American Revolution is the latest volume from the West Point History of Warfare.</p>
                            <p>
                                This new volume offers a groundbreaking view of this foundational war. With a host of new, custom built digital features - including in-depth animated campaign maps, interactive data visualizations, in-depth detail on period propaganda, battle songs and lyrics, soldier hotspot interactives, expandable biographies, historical on-the-ground accounts, and precise
                                battle maps - this interactive text offers a view of the war that has truly never been seen before.
                            </p>
                            <p>As the New York Journal of Books states, the book "sets the standard for a single volume military history text on the American Revolution." And the digital features only add to this exceptional standard. Over six comprehensive chapters, the book outlines all aspects of the war, from the pre-war tensions and conflicts to the post-war survival of a nation state.</p>
                            <p>This digital text is available across all platforms on Windows, Apple, and Android devices.</p>
                        </Typography>
                    </Box>
                    <Divider className={classes.dividerFullWidth} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box className={classes.box}>
                        <List component="nav">
                            <ListItem button onClick={handleClick} className={classes.list}>
                                <Typography gutterBottom variant="h5" component="h5" className={classes.h5}>
                                    Table of Contents
                                </Typography>
                                <ListItemText />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding color="textSecondary">
                                    <div className={classes.spacer} />

                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="1 - War in Greece and Rome" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="2 - Early and High Medieval Warfare" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="3 - Warfare in the Late Middle Ages" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="4 - The Military Revolution and the Thirty Years' War" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="5 - The French Army of Louis XIV to 1688" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="6 - British Military Developments to 1700" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="7 - The War of the Spanish Succession" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="8 - The War of Austrian Succession" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="9 - The Seven Years' War in Europe" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="10 - Early Imperial Encounters in North America" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="11 - The Seven Years' War in North America and Beyond" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="12 - The Origins of the American Revolution and Opening Moves" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="13 - From Defeat to Victory in the North: 1777–1778" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="14 - The War in Georgia and the Carolinas" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="15 - Yorktown, the Peace, and Why the British Failed" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="16 - The French Revolutionary Wars" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="17 - The Rise of Napoleo" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="18 - Ulm to Austerlitz" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="19 - Apogee of the Grand Armeé" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="20 - The Oceans, the Peninsula, and the Invasion of Russia" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="21 - The Guerilla War: Spain, 1808–1814" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="22 - Europe Defeats Napoleon" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="23 - Interpreting Napoleon: Clausewitz, Jomini, and Restoration Armies" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="24 - Warfare and the American Nation-State, 1783–1845" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="25 - The U.S.-Mexican War" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="26 - Origins and Opening Moves of the American Civil War" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="27 - The War in the East, July 1861–September 1862" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="28 - Seeking Decision in the East, November 1862–August 1863" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="29 - Grant's War in the West" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="30 - Coordinated Strategy and Hard War" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="31 - The End of the War and the Army in Reconstruction" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="32 - The American Army in the West, 1865–1897" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="33 - European Military Development, 1848–1871" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="34 - The European Balance of Power and the Colonial Wars" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FolderOutlined />
                                        </ListItemIcon>
                                        <ListItemText primary="35 - An American Empire" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                    <Divider className={classes.dividerFullWidth} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Box className={classes.box}>
                        <Typography gutterBottom variant="h5" component="h5" className={classes.h5}>
                            Reviews
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" className={classes.quote}>
                            <p>
                                <span class="mdi mdi-format-quote-open"> </span>
                                There are truly not enough superlatives to describe this volume. . . . To accompany each chapter, the text provides lavish maps, timelines, figures, and order-of-battle diagrams for each of the major battles and campaigns. While these would be expected from a military history text, they are nonetheless extremely well done . . . While intended to serve as an
                                undergraduate textbook, there is a great deal of scholarship to unpack from this text, even for the experienced student of World War II. . . . This is a truly magnificent volume that should become not only standard issue at West Point but for any university teaching an undergraduate course in World War II.
                                <span class="mdi mdi-format-quote-close"> </span>
                            </p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="textSecondary" className={classes.subtitle1} align="right">
                            New York Journal of Books
                        </Typography>
                        <br />
                        <Typography variant="body1" color="textSecondary" component="p" className={classes.quote}>
                            <p>
                                <span class="mdi mdi-format-quote-open"> </span>A digital revolution has altered the way today's students experience the...'History of the Military Art,' thanks to a unique entrepreneurial venture between the United States Military Academy at West Point and Rowan Technology.
                                <span class="mdi mdi-format-quote-close"> </span>
                            </p>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" color="textSecondary" className={classes.subtitle1} align="right">
                            CNBC
                        </Typography>
                        <br />
                        <Typography variant="body1" color="textSecondary" component="p" className={classes.quote}>
                            <p>
                                <span class="mdi mdi-format-quote-open"> </span>
                                We were blown away by the breadth and depth of material as well the eye-popping art direction. The print edition is as good as any Civil War anthology we've ever seen, while the digital version pushes the publishing envelope with the fully animated battle maps, data-rich info graphics, diagrams, photo libraries and a host of multimedia features. Regardless of the
                                format, this collection is a must-have for any student of the American Civil War.
                                <span class="mdi mdi-format-quote-close"> </span>
                            </p>
                        </Typography>

                        <Typography gutterBottom variant="subtitle1" color="textSecondary" className={classes.subtitle1} align="right">
                            Military History Now
                        </Typography>
                    </Box>
                    <Divider className={classes.dividerFullWidth} />
                </Grid>
            </Grid>
        </div>
    );
};
