import  { useState, useCallback, useEffect } from 'react';
import Icons from '../../assets/icons';

const DUMMY_BANKS = ['Opay', 'First Bank', 'Access Bank', 'Zenith Bank'];

const WithdrawalForm = () => {
  const [activeTab, setActiveTab] = useState('Withdraw');
  const [bank, setBank] = useState(DUMMY_BANKS[0]);
  const [accountNumber, setAccountNumber] = useState('100020004'); 
  const [narration, setNarration] = useState('');
  const [accountDetails, setAccountDetails] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

 
  const fetchAccountDetails = useCallback(async () => {
    if (!bank || accountNumber.length < 8) return; 

    setIsLoading(true);
    setAccountDetails(null);

    
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    
    const fetchedDetails = {
      name: 'Maxwell Richard',
      account: accountNumber,
      bank: bank,
    };

    setAccountDetails(fetchedDetails);
    setIsLoading(false);

  }, [bank, accountNumber]);

  
  const handleContinue = () => {
    fetchAccountDetails();
  };

  
  const handleWithdraw = () => {
    if (!accountDetails) return;
    alert(`Withdrawing funds to ${accountDetails.name} (${accountDetails.account}) via ${accountDetails.bank} with narration: "${narration}"`);
    // Reset state after withdrawal
    // setAccountDetails(null);
    // setNarration('');
    // setAccountNumber('');
    // setIsSaved(false);
  };
  

  const renderInputStep = () => (
    <>
      <div className="mb-5">
        <label htmlFor="bankSelect" className="block mt-[12px] text-[11px]  mb-2">Select bank</label>
        <select 
          id="bankSelect" 
          value={bank} 
          onChange={(e) => setBank(e.target.value)}
          className="w-full p-[12px] mt-[6px] bg-[#000] border border-[#2C2C2C] rounded-lg text-white text-[11px] text-base focus:border-[#168DE1] focus:ring-[#168DE1] appearance-none"
        >
          <option value="">Select from your saved banks</option>
          {DUMMY_BANKS.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      
      
      <div className="mb-5 mt-[10px] ">
        <label htmlFor="accountNumber" className="block text-[11px]  mb-2">Account Number</label>
        <input 
          id="accountNumber"
          type="text" 
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          maxLength={10}
          className="w-[370px] mt-[6px] py-[10px] pl-[5px] bg-[#000] border border-[#2C2C2C]-600 rounded-lg text-white text-[11px] focus:border-[#168DE1] focus:ring-[#168DE1]"
        />
      </div>
      <button 
        onClick={handleContinue} 
        disabled={accountNumber.length < 8 || isLoading}
        className="w-[380px] py-[10px] mb-[15px] mt-[19px] border-[0px] bg-[#168DE1] text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition duration-150 disabled:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </>
  );

  
  const renderFetchingStep = () => (
    <div className="text-center py-10 mt-[20px] text-gray-400">
     
      <div className="
          animate-spin 
          rounded-full 
          h-[20px]
          w-[20px] 
          border-t-[2px] 
          border-b-[2px]
          border-[#168DE1] 
          mx-auto 
          mb-[12px]
          text-[13px]"
        style={{ animation: 'spin 1s linear infinite' }} 
      ></div>
      Fetching bank details
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

 
  const renderConfirmationStep = () => (
    <>
      <div className="mb-5 mt-[14px] ">
        <div className="p-[9px] bg-gray-700 border border-[#2C2C2C] text-[12px] rounded-lg text-white text-center font-mono text-lg">
            {accountDetails.account}
        </div>
      </div>

      <div className="text-center mt-[10px] mb-6">
        <p className="text-[12px] font-extrabold text-blue-400">{accountDetails.name}</p>
       
       <div className="flex items-center justify-center mt-[9px] ">
  <input 
    type="checkbox" 
    id="saveToSaved" 
    checked={isSaved}
    onChange={(e) => setIsSaved(e.target.checked)}
    className="
      appearance-none         
      h-[10px] w-[10px]                
      border-2                 
      border-[#168DE1] 
      bg-gray-700              
      checked:bg-[#168DE1]     
      checked:border-transparent 
      rounded-[15px] =
    "
  />
  <label htmlFor="saveToSaved" className="ml-[8px] text-[9px] text-gray-400">Add to saved</label>
</div>
      </div>

      <div className="mb-5 flex flex-col ">
        <label htmlFor="narration" className="block text-[11px] text-gray-400 mb-2">Narration</label>
        <input 
          id="narration"
          type="text"
          placeholder="Enter Narration"
          value={narration}
          onChange={(e) => setNarration(e.target.value)}
          className="w-[370px] p-[9px] bg-[#000] mt-[8px] border border-gray-600 rounded-lg text-white text-base focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button onClick={handleWithdraw} className="w-[200px] mt-[12px] border-[0px] self-center py-[10px] mb-[15px] bg-[#168DE1] text-white font-bold rounded-lg text-lg hover:bg-blue-700 transition duration-150">
        Withdraw
      </button>
    </>
  );




  let content;
  if (isLoading) {
    
    content = renderFetchingStep();
  } else if (accountDetails) {
   
    content = renderConfirmationStep();
  } else {
    
    content = renderInputStep();
  }

  return (
    <div className="
      flex
      flex-col
      md:max-w-[600px]
    ">
      <div className="flex gap-[45px] self-center  mb-6">
        <div 
          onClick={() => setActiveTab('Withdraw')}
          className={`
            pb-3 px-3 cursor-pointer text-[13px]  
            flex flex-col gap-[4px]
          `}
        >
          Withdraw
          {activeTab === 'Withdraw' && (
            <img 
              src={Icons.indicator}
                alt="indicator"
                className="w-[45px] "
            />
          )}
        </div>
        <div 
          onClick={() => setActiveTab('SavedBanks')}
          className={`
            pb-3 px-3 cursor-pointer text-[13px]  
            flex flex-col gap-[4px]
          `}
        >
          Saved Banks
           {activeTab != 'Withdraw' && (
            <img 
              src={Icons.indicator}
                alt="indicator"
                className="w-[45px] "
            />
          )}
        </div>
      </div>
      {content}

    </div>
  );
};

export default WithdrawalForm;