// import { loadInvoice, loadInvoiceSuccess, loadInvoiceFailure } from './invoice.actions';

// describe('invoice actions', () => {
//   it('should create a load invoice action', () => {
//     const action = loadInvoice();

//     expect(action.type).toEqual('[Invoice] Load Invoices');
//   });

//   it('should create a load invoice success action with valid payload', () => {
//     const payload = {
//       invoice: [
//         {
//             "id": "RT3080",
//             "createdAt": "2021-08-18",
//             "paymentDue": "2021-08-19",
//             "description": "Re-branding",
//             "paymentTerms": 1,
//             "clientName": "Jensen Huang",
//             "clientEmail": "jensenh@mail.com",
//             "status": "paid",
//             "senderAddress": {
//             "street": "19 Union Terrace",
//             "city": "London",
//             "postCode": "E1 3EZ",
//             "country": "United Kingdom"
//             },
//             "clientAddress": {
//             "street": "106 Kendell Street",
//             "city": "Sharrington",
//             "postCode": "NR24 5WQ",
//             "country": "United Kingdom"
//             },
//             "items": [
//             {
//                 "name": "Brand Guidelines",
//                 "quantity": 1,
//                 "price": 1800.90,
//                 "total": 1800.90
//             }
//             ],
//             "total": 1800.90
// }
//       ]
//     };
//     const action = loadInvoiceSuccess(payload);

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Success');
//     expect(action.payload).toEqual(payload);
//   });

//   it('should create a load invoice success action with empty payload', () => {
//     const action = loadInvoiceSuccess({});

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Success');
//     expect(action.payload).toEqual({});
//   });

//   it('should create a load invoice failure action with string error', () => {
//     const payload = { error: 'Network error' };
//     const action = loadInvoiceFailure(payload);

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Error');
//     expect(action.payload).toEqual(payload);
//   });

//   it('should create a load invoice failure action with object error', () => {
//     const payload = { error: { message: 'Server error' } };
//     const action = loadInvoiceFailure(payload);

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Error');
//     expect(action.payload).toEqual(payload);
//   });

//   it('should create a load invoice failure action with empty payload', () => {
//     const action = loadInvoiceFailure({});

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Error');
//     expect(action.payload).toEqual({});
//   });

//   it('should create a load invoice failure action with invalid payload', () => {
//     const action = loadInvoiceFailure(123 as any);

//     expect(action.type).toEqual('[Invoice] Invoices Loaded Error');
//     // Expect a specific error message or behavior if using a typed error
//   });
// });