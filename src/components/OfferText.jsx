import { motion } from "framer-motion";

function OfferText() {
  return (
    <>
      <div className="bg-black/90">
        <motion.div
            className="text-white py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }} >
          <p className=" text-center text-[11px] px-2 font-sans font-medium bg-transparent md:text-[12px]">
            Get up to ₹10000 instant cashback on your favourite products with eligible cards.◊
            Plus up to 6 months of No Cost EMI&yen;.
            <span className="text-blue-700 text-sm hover:underline ml-1">
              <a href="#">Shop &gt;</a>
            </span>
          </p>
        </motion.div>
      </div>
    </>
  );
}
export default OfferText

