import { urlFormat } from "./functions";

export async function getTopHeadlines(): Promise<any[]> {
  const url = urlFormat(`top-headlines?country=us`);

  const response = await fetch(url);
  const data: any = await response.json();

  if (data.status === "ok") {
    return data.articles;
  } else {
    throw new Error("Error al obtener noticias");
  }
}

/*

{
  "status": "ok",
  "totalResults": 34,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "CNBC"
    
      },
      "author": "Alex Harring, Yun Li",
      "title": "S&P 500 falls to start March trading as economic and tariff worries swirl: Live updates - CNBC",
      "description": "Trump's plans to impose import taxes on key U.S. trading partners this week loom over the stock market.",
      "url": "https://www.cnbc.com/2025/03/02/stock-futures-rise-slightly-in-overnight-trading-as-investors-await-tariff-news-live-updates.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107099147-NYSE-Trading-Floor-OB-Photo-220804-CC-PRESS-4.jpg?v=1730846839&w=1920&h=1080",
      "publishedAt": "2025-03-03T16:41:00Z",
      "content": "The S&amp;P 500 retreated on Monday, struggling to rebound from February's rout as a deadline on President Donald Trump's tariff policies this week ratcheted up economic concerns.\r\nThe broad index fe… [+1900 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Chance Miller",
      "title": "Tim Cook teases new Apple product this week: ‘There’s something in the air’ - 9to5Mac",
      "description": "In a new post on social media today, Tim Cook says Apple has a new product launch coming this week....",
      "url": "https://9to5mac.com/2025/03/03/tim-cook-teases-new-apple-product-this-week-theres-something-in-the-air/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/03/air.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2025-03-03T15:57:00Z",
      "content": "In a new post on social media today, Tim Cook says Apple has a new product launch coming this week.\r\nThe short teaser video posted on X says: “There’s something in the Air.” \r\nThis a not-so-subtle hi… [+1475 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Jaclyn Peiser",
      "title": "Kroger CEO resigns abruptly after investigation into personal conduct - The Washington Post",
      "description": "The Kroger grocery chain’s board determined Rodney McMullen’s personal conduct was “inconsistent” with its ethics policies, but didn’t specify what the conduct was.",
      "url": "https://www.washingtonpost.com/business/2025/03/03/kroger-ceo-rodney-mcmullen-resigns/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J5EWUJIUODAY2OPJAPSTPUEUXM_size-normalized.jpg&w=1440",
      "publishedAt": "2025-03-03T15:47:46Z",
      "content": "Longtime Kroger chief executive Rodney McMullen resigned abruptly Monday after an investigation determined that his personal conduct was inconsistent with the grocery chains ethics policies.\r\nThe com… [+2143 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Daniel Michaels",
      "title": "Trump’s Embrace of Russia Rocks NATO Alliance - The Wall Street Journal",
      "description": "Administration’s moves to end Moscow’s isolation cast doubt on alliance unity",
      "url": "https://www.wsj.com/world/europe/trumps-embrace-of-russia-rocks-nato-alliance-9cc0d63a",
      "urlToImage": "https://images.wsj.net/im-64482625/social",
      "publishedAt": "2025-03-03T15:34:00Z",
      "content": null
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Sources: FSU, Clemson, ACC expected to settle - ESPN",
      "description": "FSU and Clemson will vote Tuesday on an agreement that would ultimately result in the settlement of lawsuits between the schools and the ACC, sources told ESPN.",
      "url": "https://www.espn.com/college-football/story/_/id/44093338/sources-fsu-clemson-expected-reach-settlement-acc",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2017%2F1005%2Fr269405_1296x729_16%2D9.jpg",
      "publishedAt": "2025-03-03T15:30:00Z",
      "content": "Florida State and Clemson will vote Tuesday on an agreement that would ultimately result in the settlement of four ongoing lawsuits between the schools and the ACC and a new revenue-distribution stra… [+5578 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Thales: Michelle O'Neill 'incredulous' over Ukraine missile deal - BBC.com",
      "description": "Thales missile factory in east Belfast is set to supply 5,000 air defence missiles to Ukraine.",
      "url": "https://www.bbc.com/news/articles/c2er3ynvmlmo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/741a/live/ea5aa000-f84e-11ef-83da-2fe2e32e5a75.jpg",
      "publishedAt": "2025-03-03T15:23:56Z",
      "content": "First Minister Michelle O'Neill has said she is \"incredulous\" at a UK government deal for a Belfast factory to supply air defence missiles to Ukraine.\r\nThe Sinn Féin vice-president said that \"rather … [+1903 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Benjamin Brown, Stephanie Halasz",
      "title": "At least one killed after car rams into crowd in German city of Mannheim, police say - CNN",
      "description": "At least two people have been killed and several others have been injured after a car rammed into pedestrians in the southwestern German city of Mannheim, a local official said Monday.",
      "url": "https://www.cnn.com/2025/03/03/europe/mannheim-germany-car-ramming-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2202550822.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-03-03T15:22:00Z",
      "content": "At least two people have been killed and several others have been injured after a car rammed into pedestrians in the southwestern German city of Mannheim, a local official said Monday.\r\nMannheim poli… [+2709 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Nadia Kounang",
      "title": "As measles outbreak grows, HHS secretary says vaccination is a personal decision that can protect individuals and communities - CNN",
      "description": "As a measles outbreak in Texas has grown to nearly 150 cases, US Health and Human Services Sec. Robert F. Kennedy Jr. said in an opinion piece on Fox News on Sunday that parents should consult with health-care providers “to understand their options to get the…",
      "url": "https://www.cnn.com/2025/03/02/health/measles-rfk-vaccines/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2201503706.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-03-03T15:22:00Z",
      "content": "As a measles outbreak in Texas has grown to nearly 150 cases, US Health and Human Services Secretary Robert F. Kennedy Jr. said in an opinion piece on Fox News on Sunday that parents should consult w… [+4259 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "ABC News",
      "title": "New storm bringing blizzard conditions to Heartland, tornadoes to the South - ABC News",
      "description": null,
      "url": "https://abcnews.go.com/US/new-storm-bringing-blizzard-conditions-heartland-tornadoes-south/story?id\\\\u003d119380933",
      "urlToImage": null,
      "publishedAt": "2025-03-03T14:47:22Z",
      "content": null
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "Joseph Krauss",
      "title": "With the Gaza ceasefire in limbo, Israel tries to impose an alternative plan on Hamas - The Associated Press",
      "description": "Israel has introduced what it said was a new U.S. ceasefire plan and is trying to force Hamas to accept it by imposing a siege on the Gaza Strip. The plan is different from the one the two sides agreed to in January. Prime Minister Benjamin Netanyahu referred…",
      "url": "https://apnews.com/article/israel-palestinians-hamas-war-ceasefire-hostages-witkoff-plan-46a639d66772915ba1ed0b43cd2728d8",
      "urlToImage": "https://dims.apnews.com/dims4/default/ce50b14/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0a%2F17%2F981bf2e68329a37c2755e63d770d%2F5196f5ca8373477f847eb1c55ef4f6db",
      "publishedAt": "2025-03-03T14:44:00Z",
      "content": "Israel this week introduced what it said was a new U.S. ceasefire plan different from the one it agreed to in January and is trying to force Hamas to accept it by imposing a siege on the Gaza Strip.\r… [+6754 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "US tariffs on Canada and Mexico will go ahead on Tuesday, says commerce chief - BBC.com",
      "description": "Howard Lutnick says the president's threat of blanket import taxes on his neighbours will proceed as planned.",
      "url": "https://www.bbc.com/news/articles/cn48q3150dxo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5674/live/812ef740-f847-11ef-b5bf-275f2ed479cc.jpg",
      "publishedAt": "2025-03-03T14:43:37Z",
      "content": "Tom Geoghegan &amp; Laura BickerBBC News, London and Beijing\r\nWatch: Id be pissed if I was Canadian - Trump supporters on 51st state jibe\r\nUS tariffs against Canada and Mexico will go ahead on Tuesda… [+3225 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "FATIMA HUSSEIN Associated Press",
      "title": "Treasury ends enforcement of business ownership database meant to stop shell company formation - ABC News",
      "description": "The U.S. Treasury Department says it will not enforce a Biden-era small business rule intended to curb money laundering and shell company formation",
      "url": "https://abcnews.go.com/Business/wireStory/treasury-ends-enforcement-business-ownership-database-meant-stop-119382850",
      "urlToImage": "https://i.abcnewsfe.com/a/8b56ae84-62fc-45d2-9bbc-a00cf746a57a/wirestory_a903100907851cca1930511f96e9686d_16x9.jpg?w=1600",
      "publishedAt": "2025-03-03T14:15:35Z",
      "content": "WASHINGTON -- The U.S. Treasury Department announced it will not enforce a Biden-era small business rule intended to curb money laundering and shell company formation.\r\nIn a Sunday evening announceme… [+2510 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2025 NFL mock draft: Giants pass on quarterback, Jets replace Davante Adams in post-combine edition - CBS Sports",
      "description": "Plenty of prospects showed out in Indianapolis",
      "url": "https://www.cbssports.com/nfl/draft/news/2025-nfl-mock-draft-giants-pass-on-quarterback-jets-replace-davante-adams-in-post-combine-edition/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/03/03/25689812-3bba-4ed1-aa11-922840715769/thumbnail/1200x675/999cec882c9dd5fbf70150a740dfa785/travis-hunter.jpg",
      "publishedAt": "2025-03-03T13:21:00Z",
      "content": "We're not quite down the home stretch, but the college and NFL seasons are over, the college all-star games are in the books and the NFL Scouting Combine is a wrap. All that's left are the pro days a… [+845 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "Watch SpaceX launch is Starship Flight 8 megarocket test flight today - Space.com",
      "description": "Liftoff is scheduled for 6:30 p.m. ET today (March 3).",
      "url": "https://www.space.com/space-exploration/private-spaceflight/spacex-launching-flight-8-of-starship-megarocket-today-watch-it-live",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/M2TuXAAuvBymV3e3ywjy3Q-1200-80.jpg",
      "publishedAt": "2025-03-03T13:00:00Z",
      "content": "SpaceX plans to launch the eighth test flight of its huge Starship rocket today (March 3), and you can watch the dramatic action live.\r\nStarship, the biggest and most powerful rocket ever built, is s… [+2226 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Natalie Rahhal",
      "title": "Colorectal cancer rates are rising among young adults. So are their anxieties about the disease. - Yahoo Life",
      "description": "Young adults may be tempted to pay for expensive early screening — but that can come with its own risks, like over-diagnosis, experts warn.",
      "url": "https://www.yahoo.com/lifestyle/colorectal-cancer-rates-are-rising-among-young-adults-so-are-their-anxieties-about-the-disease-120043002.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/SUJgqRTFhESNUMAMrSXahw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2025-02/4a871d90-f620-11ef-9ce1-8b05d1073486",
      "publishedAt": "2025-03-03T12:00:43Z",
      "content": "Colorectal cancer rates rising among young adults is a trend that public health officials and researchers are worried about. The proportion of people developing the disease under the age of 50 has do… [+7140 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Paresh Dave",
      "title": "Amazon’s Delivery Drones Are Grounded. The Birds and Dogs of This Texas Town Are Grateful - WIRED",
      "description": "Amazon’s drones met more resistance in College Station, Texas, than in any other city in the US. Now they’re gone—and a sense of peace and privacy has been restored.",
      "url": "https://www.wired.com/story/texas-amazon-drones-stop-flying/",
      "urlToImage": "https://media.wired.com/photos/67a108c19a79dfc7894537c6/191:100/w_1280,c_limit/Amazon-Delivery-Drones-Business-1732229069.jpg",
      "publishedAt": "2025-03-03T12:00:00Z",
      "content": "Over the summer, Amazon reduced the number of drone flights. In November, it fully adopted newer, quieter drones in College Station that deliver within a range of about 7.5 miles. Inside his house, w… [+3913 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Boston Globe"
      },
      "author": null,
      "title": "‘Short sighted’: What canceled FDA meetings and WHO withdrawal mean for fall flu vaccines - The Boston Globe",
      "description": "Spot shortages and delayed dosages are possible, experts said.",
      "url": "https://www.bostonglobe.com/2025/03/03/metro/fda-cancels-flu-vaccine-meeting/",
      "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/v2/ET3XH3Z34EIC4TVEVUKTV4DQXY.jpg?auth=4802604aed9f28d4bfecc40658ba13ae92071fe89b282b8fe4253077da2f6e6e&width=1440",
      "publishedAt": "2025-03-03T11:04:19Z",
      "content": "Heres what goes into manufacturing the annual influenza vaccine and what recent disruptions mean.\r\nThe Food and Drug Administrations Vaccines and Related Biological Products Advisory Committee had be… [+6494 chars]"
    }
  ]
}
  */
