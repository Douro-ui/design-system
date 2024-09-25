import { renderHook, waitFor } from '../../../../../../tests/test-utils';
import { useToasterQueue } from '../useToasterQueue';
import { ToasterProps } from '../../toaster.types';

describe('useToasterQueue', () => {
  it('should add a toaster to the queue', async () => {
    const { result } = renderHook(() => useToasterQueue());

    const newToaster: ToasterProps = {
      id: '1',
      typeToaster: 'info',
      position: 'top-right',
      duration: 5000,
      children: 'Test Toaster',
    };

    waitFor(() => {
      result.current.addToaster(newToaster);
    });

    await waitFor(() => {
      expect(result.current.toasters).toHaveLength(1);
      expect(result.current.toasters[0]).toMatchObject(newToaster);
    });
  });

  it('should remove a toaster from the queue by id', async () => {
    const { result } = renderHook(() => useToasterQueue());

    const newToaster: ToasterProps = {
      id: '1',
      typeToaster: 'info',
      position: 'top-right',
      duration: 5000,
      children: 'Test Toaster',
    };

    waitFor(() => {});
    result.current.addToaster(newToaster);

    await waitFor(() => {
      result.current.removeToaster('1');
    });

    await waitFor(() => {
      expect(result.current.toasters).toHaveLength(0);
    });
  });

  it('should maintain the correct state when multiple toasters are added and removed', async () => {
    const { result } = renderHook(() => useToasterQueue());

    const toaster1: ToasterProps = {
      id: '1',
      typeToaster: 'info',
      position: 'top-right',
      duration: 5000,
      children: 'First Toaster',
    };

    const toaster2: ToasterProps = {
      id: '2',
      typeToaster: 'success',
      position: 'bottom-left',
      duration: 5000,
      children: 'Second Toaster',
    };

    waitFor(() => {
      result.current.addToaster(toaster1);
      result.current.addToaster(toaster2);
    });

    await waitFor(() => {
      expect(result.current.toasters).toHaveLength(2);
      expect(result.current.toasters[0]).toMatchObject(toaster1);
      expect(result.current.toasters[1]).toMatchObject(toaster2);
    });

    result.current.removeToaster('1');

    await waitFor(() => {
      expect(result.current.toasters).toHaveLength(1);
      expect(result.current.toasters[0]).toMatchObject(toaster2);
    });
  });
});
