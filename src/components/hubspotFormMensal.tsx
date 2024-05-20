import { useHubspotForm } from 'next-hubspot';

const HubspotCannaDocsMensal = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: 'ceb408c0-fe58-498f-a5dd-f7a2e8299439',
        target: '#hubspot-form-cannadocsMensal'
    });

    return (
        <div id="hubspot-form-cannadocsMensal" />
    )
}

export default HubspotCannaDocsMensal;