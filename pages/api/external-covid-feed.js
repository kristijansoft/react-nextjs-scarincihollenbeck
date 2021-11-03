const Parser = require('rss-parser');

// sort and parse results
async function parseFeedResults(feed, sourceUrl) {
  const results = [];

  // check if the source is asbury park press
  feed.items.forEach(async (post) => {
    const {
      title, link, pubDate, isoDate, content,
    } = post;

    if (
      content.indexOf('pandemic') > -1
      || content.indexOf('COVID-19') > -1
      || content.indexOf('Corona') > -1
    ) {
      // push results into array
      await results.push({
        title,
        link,
        pubDate,
        isoDate,
        source: sourceUrl,
      });
    }
  });

  return results;
}

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const parser = new Parser();

      // parse through njBiz Government section
      const njBizGovFeed = await parser.parseURL('https://njbiz.com/feed/?cat=275');
      const njBizGovUrl = '<a href="https://njbiz.com/government/">NJBIZ - Government</a>';
      const parsedNjBizGov = await parseFeedResults(njBizGovFeed, njBizGovUrl);

      // parse through njBiz Health section
      const njBizHealthFeed = await parser.parseURL('https://njbiz.com/feed/?cat=420');
      const njBizHealthUrl = '<a href="https://njbiz.com/health-care/">NJBIZ - Health Care</a>';
      const parsedNjBizHealth = await parseFeedResults(njBizHealthFeed, njBizHealthUrl);

      // North Jersey health
      const northJerseyHealthFeed = await parser.parseURL(
        'http://rssfeeds.northjersey.com/northjerseyhealth&x=1',
      );
      const northJerseyHealthUrl = '<a href="http://rssfeeds.northjersey.com/northjerseybusiness">NorthJersey.com - Health</a>';
      const parseNorthJerseyHealth = await parseFeedResults(
        northJerseyHealthFeed,
        northJerseyHealthUrl,
      );

      // North Jersey health
      const asburyParkPressFeed = await parser.parseURL('http://rssfeeds.app.com/asburypark/home');
      const asburyParkPressUrl = '<a href="https://www.app.com">Asbury Park Press</a>';
      const parseAsburyParkPress = await parseFeedResults(
        asburyParkPressFeed,
        asburyParkPressUrl,
        'app',
      );

      // observer
      const observerPressFeed = await parser.parseURL('https://observer.com/feed');
      const observerUrl = '<a href="https://observer.com">Observer.com</a>';
      const parsedObserver = await parseFeedResults(observerPressFeed, observerUrl);

      // observer
      const roiNJPressFeed = await parser.parseURL('https://www.roi-nj.com/feed');
      const roiNJUrl = '<a href="https://observer.com">ROI-NJ.com</a>';
      const parsedRoiNJ = await parseFeedResults(roiNJPressFeed, roiNJUrl);

      const feed = [
        ...parsedNjBizGov,
        ...parsedNjBizHealth,
        ...parseNorthJerseyHealth,
        ...parseAsburyParkPress,
        ...parsedObserver,
        ...parsedRoiNJ,
      ];

      // sort feed articles by date
      await feed.sort((a, b) => {
        const dateA = new Date(a.isoDate);
        const dateB = new Date(b.isoDate);
        return dateB - dateA;
      });

      if (feed.length > 0) {
        res.status(200).send({ status: 200, response: feed });
      } else {
        res.status(404).json({ status: 404, response: 'No feeds found!' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
};
