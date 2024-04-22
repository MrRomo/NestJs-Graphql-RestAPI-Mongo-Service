import { Types } from 'mongoose';

export const createFilterObject = (filter: string): any => {
  const filters = filter.split(',');
  //find logic simbols on string in jerarquiecal order =, >=, <=, !=, >, <, <>
  const filterArray: any = filters.map((filter) => {
    const [key, operation, value] = filter.split('/');
    const [field, fieldArray] = key.split('.');

    switch (operation) {
      case 'lk':
        return { [key]: new RegExp(value, 'i') };
      case 'eq':
        return { [key]: { $eq: validateBoolean(value, key) } };
      case 'gte':
        return { [key]: { $gte: value } };
      case 'lte':
        return { [key]: { $lte: value } };
      case 'ne':
        return { [key]: { $ne: value } };
      case 'gt':
        return { [key]: { $gt: value } };
      case 'lt':
        return { [key]: { $lt: value } };
      case 'in':
        return { [key]: { $in: value.split('|') } };
      case 'inIdArr':
        return {
          [field]: {
            $elemMatch: { [fieldArray]: validateObjectId(value, fieldArray) },
          },
        };
      default:
        return { [key]: value };
    }
  });
  //merge filterArray to filterObject
  const filterObject: any = filterArray.reduce((acc: any, filter: any) => {
    return { ...acc, ...filter };
  }, {});
  return filterObject;
};

const validateBoolean = (value: string, key: string) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return validateObjectId(value, key);
};

const validateObjectId = (value: string, key: string) => {
  const length = value.length == 24;
  const isHex = /^[0-9a-fA-F]+$/.test(value);
  const includesId = key.includes('Id');
  if (length && isHex && includesId) return new Types.ObjectId(value);
  return value;
};

export const groupAggregate = (group: string) =>
  ({
    minute: {
      $dateToString: {
        format: '%Y-%m-%d %H:%M:00',
        date: '$createdAt',
        timezone: '-05:00',
      },
    },
    hourly: {
      $dateToString: {
        format: '%Y-%m-%d %H:00:00',
        date: '$createdAt',
        timezone: '-05:00',
      },
    },
    daily: {
      $dateToString: {
        format: '%Y-%m-%d',
        date: '$createdAt',
        timezone: '-05:00',
      },
    },
    weekly: { $week: '$createdAt' },
    monthly: {
      $dateToString: {
        format: '%Y-%m',
        date: '$createdAt',
        timezone: '-05:00',
      },
    },
    yearly: {
      $dateToString: { format: '%Y', date: '$createdAt', timezone: '-05:00' },
    },
  })[group];
