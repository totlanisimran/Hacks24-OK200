import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useCompany } from "../context/CompanyContext";
const NGOReportScreen = ({ route }) => {
  console.log("Route:", route);
  //   const { companyName } = useCompany();
  //   const companyName = "company1";
  //   console.log(companyName + " this is company");
  const companyName = "Jp morgan";
  //   const ngoName = route.params?.ngoName;
  //   console.log("NGO Name:", ngoName);
  const ngoName = "Tech4Good";
  //   console.log("NGO Name:", ngoName);
  //   console.log(ngoName);
  const [reportData, setReportData] = useState(null);

  const fetchReportData = async () => {
    try {
      const response = await fetch(
        `http://192.168.137.181:5000/api/report/reports/${companyName}/${ngoName}`
      );
      const data = await response.json();
      console.log("API Response:", data);
      setReportData(data);
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {reportData ? (
        <View>
          <Text style={styles.reportTitle}>
            {reportData[0].ngoName} Expenditure Report
          </Text>
          <Text style={styles.toCompany}>To {reportData[0].companyName},</Text>
          <Text style={styles.introText}>
            We were allocated{" "}
            <Text style={styles.reportAmt}>
              ${reportData[0].allocatedMoney}
            </Text>{" "}
            by your company.
          </Text>

          <Text style={styles.subHeading}>List of Expenditures:</Text>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderCell}>Category</Text>
              <Text style={styles.tableHeaderCell}>Amount</Text>
            </View>
            {reportData[0].expenditures.map((expenditure, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{expenditure.category}</Text>
                <Text style={styles.tableCell}>${expenditure.amount}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.totalText}>
            Total Expenditure: ${reportData[0].totalExpenditure}
          </Text>

          <Text style={styles.remainingText}>
            The amount which we still have with us is $
            {reportData[0].allocatedMoney - reportData[0].totalExpenditure}
          </Text>

          <Text style={styles.planText}>
            We plan to use this in the future for the following things:
            {/* List the future plans here */}
          </Text>

          <Text style={styles.thankYouText}>
            Thank you for your collaboration with us. Looking forward to more in
            the future.
          </Text>

          <Text style={styles.signature}>{reportData[0].ngoName}</Text>
        </View>
      ) : (
        <Text>Loading report data...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  reportTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  reportAmt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  toCompany: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  introText: {
    fontSize: 16,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  tableContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    backgroundColor: "#f2f2f2",
    padding: 5,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  remainingText: {
    fontSize: 16,
    marginTop: 10,
  },
  planText: {
    fontSize: 16,
    marginTop: 10,
  },
  thankYouText: {
    fontSize: 16,
    marginTop: 10,
    fontStyle: "italic",
  },
  signature: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
});

export default NGOReportScreen;
