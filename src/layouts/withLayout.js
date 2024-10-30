// layouts/withLayout.js
import AdminLayout from '@/layouts/AdminLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

const withLayout = (PageComponent, layoutType) => {
    return function WrappedWithLayout(props) {
        if (layoutType === 'admin') {
            return (
                <AdminLayout>
                    <PageComponent {...props} />
                </AdminLayout>
            );
        }

        return (
            <DefaultLayout>
                <PageComponent {...props} />
            </DefaultLayout>
        );
    };
};

export default withLayout;
