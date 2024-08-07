import {
  reactExtension,
  useShippingAddress,
  useBuyerJourneyIntercept,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <Extension />
));

function Extension() {
  const t = useTranslate();
  const { address1, address2 } = useShippingAddress();

  useBuyerJourneyIntercept(({ canBlockProgress }) => {
    if (canBlockProgress) {
      if (address1 && address1.length > 35) {
        return {
          behavior: 'block',
          reason: 'Max length is 35',
          errors: [
            {
              message: t('addressError'),
              target: '$.cart.deliveryGroups[0].deliveryAddress.address1',
            },
          ],
        };
      }
      if (address2 && address2.length > 35) {
        return {
          behavior: 'block',
          reason: 'Max length is 35',
          errors: [
            {
              message: t('lengthError'),
              target: '$.cart.deliveryGroups[0].deliveryAddress.address2',
            },
          ],
        };
      }
    }
    return {
      behavior: 'allow',
    };
  });

  return null;
}
