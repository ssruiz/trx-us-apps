import { useEffect } from 'react';

import {
  useApplyShippingAddressChange,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

const AddressFieldTruncator: React.FC = () => {
  const address = useShippingAddress();

  const applyShippingAddressChange = useApplyShippingAddressChange();

  const firstAddress = address?.address1;

  useEffect(() => {
    if (firstAddress && firstAddress.length > 35) {
      applyShippingAddressChange({
        type: 'updateShippingAddress',
        address: { ...address, address1: firstAddress.slice(0, 35) },
      });
    }
  }, [applyShippingAddressChange, firstAddress]);

  return null;
};

export default AddressFieldTruncator;
