import { reactExtension } from '@shopify/ui-extensions-react/checkout';
import AddressFieldTruncator from './AddressFieldTruncator';

export default reactExtension('purchase.checkout.block.render', () => (
  <AddressFieldTruncator />
));
