// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Page7 from '../page7'; // Adjust the import path if needed
// import { ref, set, onValue } from 'firebase/database';

// // Mock Firebase functions
// jest.mock('firebase/app', () => ({
//   initializeApp: jest.fn(),
//   getApp: jest.fn(() => ({})), // Mock the getApp function to return a mock app instance
// }));

// jest.mock('firebase/database', () => ({
//   getDatabase: jest.fn(() => ({})), // Mock getDatabase to return an empty object (or appropriate mock)
//   ref: jest.fn(),
//   set: jest.fn(),
//   onValue: jest.fn(),
// }));

// jest.mock('firebase/auth', () => ({
//   getAuth: jest.fn(() => ({})),
//   signInWithEmailAndPassword: jest.fn(),
// }));

// describe('Page7 Component', () => {
//   const mockId = '12345';

//   beforeEach(() => {
//     jest.clearAllMocks();
//     const mockConfig = { apiKey: 'dummyApiKey', authDomain: 'dummyAuthDomain' }; // Use your config here
//     require('firebase/app').initializeApp(mockConfig);

//     // Setup mock data
//     const mockUcapan = [
//       { id: '1', name: 'John', text: 'Selamat menikah!' },
//       { id: '2', name: 'Jane', text: 'Semoga langgeng!' },
//     ];

//     // Mock onValue untuk Firebase agar mengembalikan data ucapan
//     onValue.mockImplementation((messagesRef, callback) => {
//       const snapshot = {
//         val: () => {
//           const ucapanObj = {};
//           mockUcapan.forEach((msg, index) => {
//             ucapanObj[index] = { name: msg.name, text: msg.text };
//           });
//           return ucapanObj;
//         },
//       };
//       callback(snapshot);
//     });
//   });

//   it('renders the form correctly', () => {
//     render(<Page7 id={mockId} />);

//     expect(screen.getByPlaceholderText('Nama')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Ucapan Anda')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Kirim/i })).toBeInTheDocument();
//   });

//   it('allows user to type name and message', async () => {
//     render(<Page7 id={mockId} />);

//     const nameInput = screen.getByPlaceholderText('Nama');
//     const messageInput = screen.getByPlaceholderText('Ucapan Anda');

//     await userEvent.type(nameInput, 'Budi');
//     await userEvent.type(messageInput, 'Selamat menempuh hidup baru!');

//     expect(nameInput).toHaveValue('Budi');
//     expect(messageInput).toHaveValue('Selamat menempuh hidup baru!');
//   });

//   it('disables the send button when name or message is empty', async () => {
//     render(<Page7 id={mockId} />);

//     const nameInput = screen.getByPlaceholderText('Nama');
//     const messageInput = screen.getByPlaceholderText('Ucapan Anda');
//     const sendButton = screen.getByRole('button', { name: /Kirim/i });

//     // Initially, the button should be disabled
//     expect(sendButton).toBeDisabled();

//     // Type the name but leave the message empty
//     await userEvent.type(nameInput, 'Budi');
//     expect(sendButton).toBeDisabled();

//     // Now, fill the message field
//     await userEvent.type(messageInput, 'Selamat menempuh hidup baru!');
//     expect(sendButton).toBeEnabled();
//   });

//   it('calls the set function to send a message', async () => {
//     render(<Page7 id={mockId} />);

//     const nameInput = screen.getByPlaceholderText('Nama');
//     const messageInput = screen.getByPlaceholderText('Ucapan Anda');
//     const sendButton = screen.getByRole('button', { name: /Kirim/i });

//     // Fill in the input fields
//     await userEvent.type(nameInput, 'Budi');
//     await userEvent.type(messageInput, 'Selamat menempuh hidup baru!');

//     // Simulate clicking the send button
//     fireEvent.click(sendButton);

//     // Ensure that the `set` function is called with the correct arguments
//     expect(set).toHaveBeenCalledWith(
//       expect.any(Object),
//       expect.objectContaining({
//         name: 'Budi',
//         text: 'Selamat menempuh hidup baru!',
//       })
//     );
//   });

//   it('displays ucapan from Firebase', async () => {
//     render(<Page7 id={mockId} />);

//     // Wait for the ucapan to be displayed
//     await waitFor(() => {
//       expect(screen.getByText(/Selamat menikah!/i)).toBeInTheDocument();
//       expect(screen.getByText(/Semoga langgeng!/i)).toBeInTheDocument();
//     });
//   });
// });
