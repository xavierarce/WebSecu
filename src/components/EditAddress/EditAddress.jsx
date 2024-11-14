import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";
import { hp } from "../../helpers/common";
import Button from "@/src/components/Button/Button";
import Input from "@/src/components/Input/Input";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "@/src/context/AuthContext";
import { defaultAddress, formatAddress } from "@/src/services/formatFunctions";

export const AddressInput = ({
  setAddressInput,
  formUser = { address: {} },
}) => {
  const { user } = useAuthContext();
  const { t } = useTranslation();
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [initialAddress, setInitialAddress] = useState(user?.address || {});

  useEffect(() => {
    if (user?.address) {
      setInitialAddress(user.address);
    }
  }, [user]);

  const handleCancel = () => {
    Object.keys(initialAddress).forEach((key) => {
      setAddressInput(key, initialAddress[key]);
    });
    setIsAddressOpen(false);
  };

  return (
    <View
      key="address"
      style={[styles.form, { marginBottom: hp(2), marginTop: hp(2) }]}
    >
      <View>
        <Input editable={false} value={formatAddress(user?.address)} />
        <View style={{ alignItems: "flex-start" }}>
          <Button
            buttonStyle={{
              paddingHorizontal: hp(2),
              marginTop: hp(1),
              borderRadius: 8,
            }}
            title={t("edit-profile.form.open-edit-address")}
            onPress={() => setIsAddressOpen(true)}
          />
        </View>
      </View>
      {isAddressOpen &&
        Object.keys(defaultAddress).map((addressKey) => (
          <Input
            key={addressKey}
            containerStyles={{ marginTop: hp(1) }}
            placeholder={t(`edit-profile.form.${addressKey}`)}
            onChangeText={(e) => setAddressInput(addressKey, e)}
            value={formUser.address[addressKey]}
          />
        ))}
      {isAddressOpen && (
        <View style={{ alignItems: "flex-start" }}>
          <Button
            buttonStyle={{
              paddingHorizontal: hp(2),
              marginTop: hp(1),
              borderRadius: 8,
            }}
            title={t(`edit-profile.form.cancel-edit-address`)}
            onPress={handleCancel}
          />
        </View>
      )}
    </View>
  );
};

AddressInput.propTypes = {
  defaultAddress: PropTypes.objectOf(PropTypes.string).isRequired, // Address fields expected to be strings
  setAddressInput: PropTypes.func.isRequired, // Callback function for updating address input
  formUser: PropTypes.shape({
    address: PropTypes.shape({}), // Address fields expected to be strings
  }),
  loading: PropTypes.bool, // Loading state for the button
};

const styles = StyleSheet.create({
  form: {
    gap: 18,
    marginTop: hp(2),
  },
});
