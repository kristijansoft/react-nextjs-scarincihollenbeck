// sort a list by its key
export function sortByKey(list, key) {
  if (list !== undefined) {
    list.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return list;
}

// add a random key to the end of a string
export const addRandomKey = (str) => str.concat('-').concat(Math.floor(Math.random() * 10000 + 1));

// take a term lower case and replace white spaces with dashes
export const urlify = (str) => str.toLowerCase().replace(/\s/g, '-');

// create mark up
export const createMarkup = (content) => ({ __html: content });

// sort by date & key
export function sortByDateKey(list, key) {
  if (list !== undefined) {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return list;
}

// get current directions to office location func
export function getDirectionsFromLocation(location) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const offices = [
    {
      title: 'lyndhurst',
      address: '1100 Valley Brook Ave. Lyndhurst, NJ 07071',
    },
    {
      title: 'red bank',
      address: '331 Newman Springs Road Red Bank, NJ 07701',
    },
    {
      title: 'new york',
      address: '589 8th Avenue, New York, NY, 10018',
    },
    {
      title: 'washington dc',
      address: 'Suite 250 1000 Potomac St., N.W. Washington D.C. 20007',
    },
    {
      title: 'san francisco',
      address: '315 Montgomery St. San Francisco, CA 94104',
    },
  ];

  const success = (pos) => {
    const crd = pos.coords;
    const lat = crd.latitude;
    const long = crd.longitude;
    const currentOffice = location.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

    // filter through available offices
    const destination = offices.filter((v) => v.title === currentOffice)[0].address;
    const map = `https://www.google.com/maps/dir/${lat}+${long}/${destination}`;
    window.open(map, '_blank');
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}):${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}

// find url parameter for query
export function splitUrl(url, term = null) {
  const x = url.split('/');
  let y = x.filter((a) => a !== '');

  if (term !== null) {
    y = y.filter((a) => a !== '' && a !== term);
  }

  return y;
}

// urlify locations
export const locationUrl = (location) => location.toLowerCase().replace(/\s/g, '-').replace(/[.]/gm, '');

// filter by key
export function filterByKey(list, key) {
  const results = [];
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].key) {
      if (list[i].key === key) {
        results.push(list[i].selected);
      }
    }
  }
  return results;
}

// make title
export const makeTitle = (string) => string.replace(/-|\s/g, ' ').replace(/\+/g, ' ').toUpperCase();

// common headers for fetch
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// format GMT date
export function formatDate(date) {
  const dateObj = new Date(date);
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const results = `${month[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  return results;
}

// format core practices
export function formatCorePractices(link) {
  return {
    name: link.title,
    link: link.slug,
  };
}

// print screen event
export function printScreen() {
  window.print();
  return false;
}

// format title in query params
export function makeQueryTitle(title) {
  const formatTitle = title.replace(/\+/g, ' ');
  return makeTitle(formatTitle);
}

// sort by orderBy key
export function sortByOrder(admins) {
  return admins.sort((a, b) => a.orderBy - b.orderBy);
}

// check if we are still using this...
export async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

// limit the string length to 200 characters
export function limitTitleLength(title) {
  if (title.length > 200) {
    return `${title.substring(0, 200)} ...`;
  }

  return title;
}

// limit the string length to 200 characters
export function setTextLen(title, len) {
  if (title.length > len) {
    return `${title.substring(0, len)} ...`;
  }

  return title;
}

// reformat posts slugs for getStaticPaths
export function urlWithOutBaseUrl(posts, term) {
  return posts.map((u) => {
    if (u.uri.indexOf(`/${term}/`) < 0) {
      const uriSplit = u.uri.split('/').filter((a) => a !== '');
      const slug = uriSplit[uriSplit.length - 1];

      return `/${term}/${slug}`;
    }
    return u.uri.replace('https://scarincihollenbeck.com', '');
  });
}
