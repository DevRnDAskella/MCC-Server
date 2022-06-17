exports.saveToDbAircraftData = async (req, models) => {
  const { isInStockEfb, isInStockBriefcase, caseNumber, efbNumbers } = req.body;
  const { regNumber } = req.params;
  const { Briefcase, Aircraft, Efb } = models;

  const briefcase = await Briefcase.findOne({ number: caseNumber });
  const promises = await efbNumbers.map(async (el) => {
    return await Efb.findOne({ number: el });
  });
  let efbList = await Promise.all(promises);
  efbList = efbList.map((el) => el._id);

  await Aircraft.findOneAndUpdate(
    { regNumbers: regNumber },
    {
      $set: {
        "equipment.efb.isInStock": isInStockEfb,
        "equipment.briefcase.isInStock": isInStockBriefcase,
        "equipment.briefcase.listBriefcase": briefcase._id,
        "equipment.efb.listEfb": efbList,
      },
    }
  );
};
