import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const company = {
  name: 'Company Name',
  coreValues: ['Value1', 'Value2'],
  mission: 'Updated mission statement',
  areasOfInterest: ['Area1', 'Area2'],
  foundedYear: 2020,
  employees: 100,
  GeoLocation: { /* GeoLocation Object */ },
  website: 'https://example.com',
  contactEmail: 'contact@example.com',
  socialMedia: { /* Social Media Object */ },
};

const Profile = () => {
  const openWebsite = () => {
    Linking.openURL(company.website);
  };

  const openEmail = () => {
    Linking.openURL(`mailto:${company.contactEmail}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{company.name}</Text>
      <Section title="Core Values" data={company.coreValues} />
      <Section title="Mission Statement" data={[company.mission]} />
      <Section title="Areas of Interest" data={company.areasOfInterest} />
      <Section title="Founded Year" data={[company.foundedYear.toString()]} />
      <Section title="Employees" data={[company.employees.toString()]} />
      <Section title="GeoLocation" data={[JSON.stringify(company.GeoLocation)]} />
      <ClickableSection title="Website" onPress={openWebsite} />
      <ClickableSection title="Contact Email" onPress={openEmail} />
      <Section title="Social Media" data={[JSON.stringify(company.socialMedia)]} />
    </ScrollView>
  );
};

const Section = ({ title, data }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.subtitle}>{title}</Text>
      {data.map((item, index) => (
        <Text key={index} style={styles.sectionText}>{item}</Text>
      ))}
    </View>
  );
};

const ClickableSection = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.clickableSection}>
        <Text style={styles.subtitle}>{title}</Text>
        <Text style={[styles.sectionText, styles.clickableText]}>
          {title === 'Website' ? company.website : company.contactEmail}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8EDE3',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
    color: '#305F72',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F18C8E',
  },
  sectionText: {
    fontSize: 16,
    color: '#34495e',
  },
  clickableSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },
  clickableText: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default Profile;