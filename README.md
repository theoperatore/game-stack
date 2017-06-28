# Game Stack

I wanted to be able to capture all of the "valuable" information my friends were giving me when I play a game. Therefore I came up with this idea to use a [GroupMe](http://groupme.com) integration to capture their chat messages and use some [NLP]() and [Machine Learning]() to match up the game I am playing with the messages they send.

I have no idea if this will be interesting or exciting, but it's yet another project for me to learn some stuff.

## Core concepts

I want to be able to go to some website, enter the game I'm playing and over time, see the chatter around that game.

If I'm playing Final Fantasy X, and I chat about it a bunch with my friends, I want to be able to see what they've said about particular message I've inputted.

It's kind of like grouping all of your friend's messages by topic.

For example, I send the message:

```
I don't know if I have the strength to go on in FFX, it's getting super boring
```

and another friend replies:

```
what part are you at? lol why don't you just play [Star Ocean till the End of Time](insertLinkToStarOcean) ? It's the bratbest jrpg of all Time
```

I want to be able to know and see on a timeline that I messaged about final fantasy, and a response was about it at a particular point in time.

## Going forward

Eventually, it would be pretty awesome to integrate this game timeline with posts from new's sites, maybe have an integration with [Gamefaqs](https://www.gamefaqs.com/) to display walkthroughs, or reivews from [Giantbomb](https://www.giantbomb.com/) or other news sites.

For now, just getting everyting up and running will be a challenge itself.

## Architecture Setup

This project is set up [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) style and therefore uses [Lerna](https://github.com/lerna/lerna) for handling everything.

For this particular project, the different deployed services will be:

- REST service for listening to GroupMe chats
- service to ingest messages and figure out potential topics from the messages (the super hard part) and save to the database (could also possibly be inside the GroupMe service? otherwise maybe it's a scheduled job for all incoming messages? TBD)
- Visualization service for the UI for showing database things and that would also handle users, auth, etc...
- Some nginx deployed website for showing everything in a very pretty and downright awesome fashion.

All of this is subject to change, and I will almost undoubtable use [node.js](https://nodejs.org/en/) for everything.

## How can I use this?

I want this to be easily deployed therefore I'm going to try to build it in a way that will be easily deployable either via [docker](https://www.docker.com/) or just by cloning and deploying built code or `dist` folders.

Most likely, each different service will rely on environment variables or `.env` files or some similar mechanism for getting secrets into the build process. I will try to keep an up-to-date list of all environment variables used per service for both sanity and for posterity.

## License

If you use it, or parts of it, just give me a shoutout, but change/improve whatever you like :)

MIT
