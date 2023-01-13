import {
	Flex,
	Heading,
	Text,
	FormControl,
	Input,
	Button,
	InputGroup,
	InputLeftElement,
	Divider,
	Wrap,
} from "@chakra-ui/react";
import { Aside } from "components/Aside";
import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { SOCIAL_NETWORKS } from "configs/social-networks";
import { useTranslation } from "next-i18next";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	user: string;
	email: string;
}

interface IInput {
	name: keyof IForm;
	type?: string;
	required?: boolean;
}

const inputs: Array<IInput> = [
	{
		name: "user",
		required: true,
	},
	{
		name: "email",
		type: "email",
		required: true,
	},
];

export const MainSection: FC = () => {
	const { t } = useTranslation("sign-up");
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			user: "",
			email: "",
		},
	});

	const { isValid, isSubmitting } = useFormState({ control });

	const onSubmit = (values: IForm) => {
		// eslint-disable-next-line no-console
		console.log(values);
	};

	return (
		<Flex direction={{ base: "column", bp6: "row" }} minH="100vh" h="full">
			<Aside />
			<Flex
				as="section"
				align="center"
				justify="center"
				flex={{ bp6: "8" }}
				minH={{ base: "45vh", bp6: "100vh" }}
				h="full"
				maxH={{ base: "45vh", bp6: "100vh" }}
				py="verticalPadding"
				px="horizontalPadding"
				overflowY="auto"
			>
				<Flex
					direction="column"
					gap="4"
					w="full"
					maxW={{ bp6: "container.xs" }}
				>
					<Flex as="header" direction="column" w="full">
						<Heading
							as="h1"
							bg="vividPrimary"
							bgClip="text"
							fontSize="heading.2"
							fontWeight="heading.2"
							lineHeight="heading.2"
						>
							{t("mainSection.header.title")}
						</Heading>
						<Text as="p">{t("mainSection.header.description")}</Text>
					</Flex>
					<Flex
						as="form"
						direction="column"
						gap="2"
						w="full"
						onSubmit={handleSubmit(onSubmit)}
					>
						<FormControl isInvalid={!isValid}>
							{inputs.map(input => (
								<InputGroup key={input.name}>
									<InputLeftElement pointerEvents="none">
										<Icon
											color="secondText"
											fontSize="heading.4"
											name={input.name}
										/>
									</InputLeftElement>
									<Input
										w="full"
										id={input.name}
										type={input.type || "text"}
										placeholder={t(
											`mainSection.form.inputs.${input.name}.placeholder`,
										)}
										{...register(input.name, {
											required: input.required || false,
										})}
									/>
								</InputGroup>
							))}
						</FormControl>
						<Button w="full" type="submit" isLoading={isSubmitting}>
							{t("mainSection.form.submit")}
						</Button>
					</Flex>
					<Flex align="center" justify="center" gap="2" w="full">
						<Divider bg="alternate" orientation="horizontal" />
						<Text
							as="span"
							color="alternate"
							fontSize="text.2"
							fontWeight="text.2"
							lineHeight="text.2"
							whiteSpace="nowrap"
						>
							{t("mainSection.divider")}
						</Text>
						<Divider bg="alternate" orientation="horizontal" />
					</Flex>
					<Wrap align="center" justify="space-evenly" w="full">
						{SOCIAL_NETWORKS.map(socialNetwork => (
							<Link
								key={socialNetwork.name}
								href={socialNetwork.url}
								isExternal
								display="flex"
								alignItems="center"
								justifyContent="center"
								bg={socialNetwork.color}
								px="4"
								py="4"
								borderRadius="round"
								aria-label={socialNetwork.name}
							>
								<Icon fontSize="heading.4" name={socialNetwork.name} />
							</Link>
						))}
					</Wrap>
				</Flex>
			</Flex>
		</Flex>
	);
};
