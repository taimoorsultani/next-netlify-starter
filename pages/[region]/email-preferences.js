import { useRouter } from 'next/router';

import SubscribtionForm from '@components/SubscribtionForm';
import { Wrapper } from 'hoc';
import { regions } from 'utils';

export default function EmailPreferences() {
  const router = useRouter();
  const { region } = router.query;
  const activeRegion = regions[region];

  if (!activeRegion) {
    return null;
  }

  return (
    <Wrapper activeRegion={activeRegion}>
      <SubscribtionForm activeRegion={activeRegion} />
    </Wrapper>
  );
}
