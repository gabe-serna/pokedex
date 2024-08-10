import * as Hidden from '@radix-ui/react-visually-hidden';
import { ReactNode } from 'react';

const VisuallyHidden: React.FC<{ children: ReactNode; asChild: boolean }> = ({
  children
}) => <Hidden.Root>{children}</Hidden.Root>;
export default VisuallyHidden;
