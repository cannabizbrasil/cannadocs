import { useHubspotForm } from 'next-hubspot';

const HubspotCannaDocsAnual = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '29fb442a-4b9d-4292-b25f-86c53e7bee77',
        target: '#hubspot-form-cannadocsAnual'
    });

    return (
        <div id="hubspot-form-cannadocsAnual" />
    )
}

export default HubspotCannaDocsAnual;


