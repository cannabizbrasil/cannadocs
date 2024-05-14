import { useHubspotForm } from 'next-hubspot';

const HubspotCannaDocs = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '567edafa-fcdf-41a6-9d51-abf126a43efa',
        target: '#hubspot-form-cannadocs'
    });

    return (
        <div id="hubspot-form-cannadocs" />
    )
}

export default HubspotCannaDocs;