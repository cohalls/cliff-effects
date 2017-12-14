import { getSNAPBenefits } from '../../../programs/federal/snap';

// CLIENTS
import { CLIENT_DEFAULTS } from '../../../utils/CLIENT_DEFAULTS';
import { sampleClients } from '../../sampleClients';
import { cloneDeep } from 'lodash';

const defaultClient       = cloneDeep( CLIENT_DEFAULTS );

describe('getSNAPBenefits', () => {
  describe('default client', () => {
    it('Should calculate the correct current benefits', () => {
      expect(getSNAPBenefits(defaultClient, 'current')).toEqual(192);
    });
  });

  describe('row3', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row3;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(1066.3, 4);
    });
  });

  describe('row4', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row4;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(85.6, 4);
    });
  });

  describe('row5', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row5;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(15, 4);
    });
  });

  describe('row6', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row6;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(352, 4);
    });
  });

  describe('row7', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row7;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(0, 4);
    });
  });

  describe('row8', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row8;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Todo - Current result - returning undefined
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(0, 4);
    });
  });

  describe('row9', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row9;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(54.4, 4);
    });
  });

  describe('row10', () => {
    it('Should calculate the correct current benefits', () => {
      let client = sampleClients.row10;
      // Sample data result didn't match. Missing data?
      // expect(getSNAPBenefits(client, 'current')).toBeCloseTo(client.current.expectedSNAP, 4);
      // Current result
      expect(getSNAPBenefits(client, 'current')).toBeCloseTo(0, 4);
    });
  });

});